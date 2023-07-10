# Mint Club V2
The inherited token creator employs a bonding curve to generate new tokens using base tokens as collateral

## Run Tests 🧪
```bash
npx hardhat test
```

### Coverage ☂️

## Deploy 🚀
```bash
npx hardhat compile && HARDHAT_NETWORK=ethsepolia node scripts/deploy.js
```

## Gas Consumption ⛽️
```m
·-----------------------------|---------------------------|---------------|-----------------------------·
|    Solc version: 0.8.20     ·  Optimizer enabled: true  ·  Runs: 50000  ·  Block limit: 30000000 gas  │
······························|···························|···············|······························
|  Methods                    ·                15 gwei/gas                ·       1855.58 usd/eth       │
··············|···············|·············|·············|···············|···············|··············
|  Contract   ·  Method       ·  Min        ·  Max        ·  Avg          ·  # calls      ·  usd (avg)  │
··············|···············|·············|·············|···············|···············|··············
|  ERC20      ·  approve      ·          -  ·          -  ·        49222  ·            9  ·       1.37  │
··············|···············|·············|·············|···············|···············|··············
|  MCV2_Bond  ·  buy          ·     102102  ·     191402  ·       166750  ·           36  ·       4.64  │
··············|···············|·············|·············|···············|···············|··············
|  MCV2_Bond  ·  createToken  ·          -  ·          -  ·       522260  ·           33  ·      14.54  │
··············|···············|·············|·············|···············|···············|··············
|  MCV2_Bond  ·  sell         ·      99839  ·     115103  ·       101227  ·           11  ·       2.82  │
··············|···············|·············|·············|···············|···············|··············
|  TestToken  ·  approve      ·      46243  ·      46255  ·        46244  ·           26  ·       1.29  │
··············|···············|·············|·············|···············|···············|··············
|  TestToken  ·  transfer     ·      51373  ·      51385  ·        51374  ·           26  ·       1.43  │
··············|···············|·············|·············|···············|···············|··············
|  Deployments                ·                                           ·  % of limit   ·             │
······························|·············|·············|···············|···············|··············
|  MCV2_Bond                  ·          -  ·          -  ·      2292803  ·        7.6 %  ·      63.82  │
······························|·············|·············|···············|···············|··············
|  MCV2_Token                 ·          -  ·          -  ·      1064865  ·        3.5 %  ·      29.64  │
······························|·············|·············|···············|···············|··············
|  TestToken                  ·          -  ·          -  ·       758959  ·        2.5 %  ·      21.12  │
·-----------------------------|-------------|-------------|---------------|---------------|-------------·
```