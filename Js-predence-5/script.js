// JavaScript Operator precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// ----- () {} []
// / * - +


/*
5 + 6 - 3 / 2 * 4
= 5+6-1.5*4
= 5+6-6
= 5 
console.log(5 + 6 - 3 / 2 * 4); // Ans: 5
*/




JavaScript Operator Precedence (অপারেটর অগ্রাধিকার) ব্যাখ্যা
উদাহরণ:

console.log(5 + 6 - 3 / 2 * 4); // Ans: 5

এখন ধাপে ধাপে বুঝি অপারেটরগুলোর অগ্রাধিকার অনুসারে এক্সপ্রেশনটি কিভাবে কাজ করছে।
অপারেটর অগ্রাধিকার তালিকা:

JavaScript-এ প্রতিটি অপারেটরের একটা অগ্রাধিকার (precedence) থাকে, যার মান যত বেশি, সেটি তত আগে এক্সিকিউট হয়। সাধারণত, অপারেটরগুলোর অগ্রাধিকার হয় এইভাবে:

    () (ব্র্যাকেট)
    {} (কোড ব্লক)
    [] (অ্যারে সাবস্ক্রিপ্ট)
    **/ , *** (ভাগ ও গুণ)
    + , - (যোগ ও বিয়োগ)

Expression:

5 + 6 - 3 / 2 * 4

Step by Step Execution:

    ভাগ (/) এবং গুণ (*) অপারেটর আগে কাজ করবে

3 / 2 = 1.5

এখন এক্সপ্রেশন হয়:

5 + 6 - 1.5 * 4

গুণ ( * ) অপারেটর আগে কাজ করবে

1.5 * 4 = 6

এখন এক্সপ্রেশন হয়:

5 + 6 - 6

যোগ ( + ) এবং বিয়োগ ( - ) অপারেটর লেফট টু রাইট (left to right) কাজ করে

5 + 6 = 11

    11 - 6 = 5

Final Answer:

console.log(5); // Output: 5

এভাবেই JavaScript-এর অপারেটর অগ্রাধিকার অনুযায়ী ধাপে ধাপে এক্সপ্রেশন সমাধান হয়। 😊
