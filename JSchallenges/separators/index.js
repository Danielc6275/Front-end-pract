/* 
Challenge:
1. Use numeric separators (_) to separate out 
   the digits into chunks of 3 so they are easier to read.
*/

const tomsBankBalanceGBP = 9_007_199_254_740_991_345n

const tomsBankBalanceGBPClone = BigInt(9_007_199_254_740_991_345)

console.log(typeof tomsBankBalanceGBP, tomsBankBalanceGBPClone)

/* BigInt is useful in contexts requiring precise handling of large integers, such as cryptography, or when interacting with atabases that use large integer identifiers */
