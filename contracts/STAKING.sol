//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./interfaces/IUniswapV2Pair.sol";

contract STAKING {

    event Transfer(address indexed _from, address indexed _to, uint _value);
    event Approval(address indexed _owner, address indexed _spender, uint _value);
    event Stake(address indexed _from, uint _value);

    address public owner;
    address public stakeToken;

    string public name;
    string public symbol;
    uint8 public decimals;
    uint8 public percent;
    uint public totalSupply;
    uint public freezing;
    uint public interval;

    struct Staker {
        uint amount;
        uint beginTime;
        uint unstakeTime;
    }

    mapping(address => Staker) private staking;
    mapping(address => uint) public rewards;
    mapping(address => uint) private balances;
    mapping(address => mapping(address => uint)) private allowances;

    constructor(
        string memory _name, 
        string memory _symbol,
        uint8 _decimals,
        uint8 _percent,
        uint _freezing,
        uint _interval,
        address _stakeToken
    ) {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        percent = _percent;
        freezing = _freezing;
        interval = _interval;
        stakeToken = _stakeToken;
    }

    modifier isOnwer() {
        require(msg.sender == owner, "You are not an owner");
        _;
    }

    function balanceOf(address _owner) public view returns (uint) {
        return balances[_owner];
    }

    function allowance(address _owner, address _spender) public view returns (uint) {
        return allowances[_owner][_spender];
    }

    function approve(address _spender, uint _value) public returns (bool) {
        _approve(msg.sender, _spender, _value);
        return true;
    }

    function transfer(address _to, uint _value) public returns (bool) {
        _transfer(msg.sender, _to, _value);
        return true;
    }

    function _transfer(address _from, address _to, uint _value) internal {
        require(_to != address(0), "Cannot transfer to the null address");
        require(_value <= balances[_from], "Cannot transfer out of balance");
        require(_value != 0, "Cannot transfer null value");

        balances[_from] -= _value;
        balances[_to] += _value;

        emit Transfer(_from, _to, _value);
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool) {
        require(_from != address(0), "Cannot transfer from the null address");
        _updateAllowance(_from, msg.sender, _value);
        _transfer(_from, _to, _value);
        return true;
    }

    function _approve(address _owner, address _spender, uint _value) internal {
        require(_spender != address(0), "Cannot approve to the null address");

        allowances[_owner][_spender] = _value;

        emit Approval(_owner, _spender, _value);
    }

    function _updateAllowance(address _owner, address _spender, uint _value) internal {
        uint _allowance = allowance(_owner, _spender);
        require(_value <= _allowance, "Cannot spend out of allowance");
        _approve(_owner, _spender, _allowance - _value);
    }

    function mint(address _account, uint _amount) public isOnwer {
        _mint(_account, _amount);
    }

    function _mint(address _account, uint _amount) internal {
        require(_account != address(0), "Cant mint to zero address");

        totalSupply += _amount;
        balances[_account] += _amount;

        emit Transfer(address(0), _account, _amount);
    }

    function burn(address _account, uint _amount) public isOnwer {
        require(_account != address(0), "Cant burn from zero address");
        require(_amount <= balances[_account], "Amount out of balance");

        totalSupply -= _amount;
        balances[_account] -= _amount;

        emit Transfer(_account, address(0), _amount);
    }

    // ------------ Staking functions ------------  //
    function updateStaking(uint8 _percent, uint _freezing, uint _interval) external isOnwer {
        percent = _percent;
        freezing = _freezing;
        interval = _interval;
    }

    function updateRewards() private {
        uint _value;
        if (staking[msg.sender].amount > 0)
            _value = (block.timestamp - staking[msg.sender].beginTime) / interval;

        staking[msg.sender].beginTime = block.timestamp;

        if (_value > 0)
            rewards[msg.sender] += _value * (staking[msg.sender].amount * percent / 100);
    }

    function stake(uint _amount) public returns (bool) {
        require(_amount > 0, "Cant stake zero value!");
        require(IUniswapV2Pair(stakeToken).transferFrom(msg.sender, address(this), _amount), "Tokens transfer failed!");

        updateRewards();
        staking[msg.sender].amount += _amount;
        staking[msg.sender].unstakeTime = block.timestamp + freezing;

        emit Stake(msg.sender, _amount);
        return true;
    }

    function claim() public{
        require(staking[msg.sender].amount > 0, "You not staking tokens!");

        updateRewards();
        uint _rewards = rewards[msg.sender];

        if (_rewards > 0) {
            rewards[msg.sender] = 0;
            _mint(msg.sender, _rewards);
        }
    }

    function unstake() public returns (bool) {
        require(staking[msg.sender].unstakeTime <= block.timestamp, "Cant unstake tokens yet!");

        claim();
        uint _amount = staking[msg.sender].amount;
        staking[msg.sender].amount = 0;
        
        require(IUniswapV2Pair(stakeToken).transfer(msg.sender, _amount), "Transfer failed");
        return true;
    }
}

