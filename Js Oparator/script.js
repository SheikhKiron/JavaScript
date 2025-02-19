JavaScript Operators Explained 🚀

এই কোডে বিভিন্ন JavaScript অপারেটর ব্যাখ্যা করা হয়েছে। আমি ধাপে ধাপে ব্যাখ্যা করছি:
1️⃣ Arithmetic Operators (গাণিতিক অপারেটর)

গাণিতিক অপারেটর সংখ্যা নিয়ে গণনা করে।

let a = 50;
let b = 20;
let c = a % b; // 50 কে 20 দিয়ে ভাগ করলে ভাগশেষ (remainder) হবে 10
console.log(c); // Output: 10

✅ % (Modulus Operator): এটি দুই সংখ্যার ভাগশেষ (remainder) দেয়।
Even or Odd Number Check (মডুলাস ব্যবহার করে সংখ্যা জোড় না বিজোড় চেক করা)

/*
let userInput = prompt('Enter a Number');
let number = parseInt(userInput);

if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else {
  console.log(`${number} is odd number`);
}
*/

✅ ব্যাখ্যা:

    prompt() ইউজার ইনপুট নেয়।
    parseInt() ইনপুটকে সংখ্যা (Integer) বানায়।
    if (number % 2 === 0) – যদি সংখ্যা ২ দিয়ে ভাগ করলে ভাগশেষ ০ হয়, তাহলে এটি জোড় (Even) সংখ্যা।
    নয়তো এটি বিজোড় (Odd) সংখ্যা।

2️⃣ Increment & Decrement Operators (বৃদ্ধি ও হ্রাস অপারেটর)

let x = 10;
x = x + 1; // x = 11
x++; // x = 12 (এক ধাপে 1 যোগ)
console.log(`Increment ${x}`); // Output: Increment 12

✅ x++ (Increment Operator): এটি মান ১ বাড়িয়ে দেয়।

let y = 20;
y = y - 1; // y = 19
y--; // y = 18 (এক ধাপে 1 কমানো হলো)
console.log(`Decrement ${y}`); // Output: Decrement 18

✅ y-- (Decrement Operator): এটি মান ১ কমিয়ে দেয়।
3️⃣ Comparison Operators (তুলনা অপারেটর)

এই অপারেটর সংখ্যা তুলনা করে এবং true বা false রিটার্ন করে।

let p = 5;
let q = 10;
console.log(p == q);  // false (5 এবং 10 সমান নয়)
console.log(p === q); // false (মান ও টাইপ দুইটাই চেক করে)
console.log(p !== q); // true  (5 এবং 10 সমান নয়, তাই true)
console.log(p > q);   // false (5 বড় নয় 10 থেকে)
console.log(p < q);   // true  (5 ছোট 10 থেকে)
console.log(p <= q);  // true  (5 ছোট অথবা সমান 10 এর)
console.log(p >= q);  // false (5 বড় বা সমান 10 এর)

✅ ব্যাখ্যা:

    == শুধু মান চেক করে।
    === মান ও টাইপ দুইটাই চেক করে।
    !== মান ও টাইপ দুটোই আলাদা কিনা চেক করে।

4️⃣ Logical Operators (লজিক্যাল অপারেটর)

✅ AND (&&), OR (||), NOT (!) ব্যবহার করে শর্ত (Condition) তৈরি করা যায়।

let p = 5;
let q = 10;

// AND (&&) - উভয় শর্ত সত্য হলে True হবে।
console.log(p > 2 && q < 15); // true (দুইটাই সত্য)

// OR (||) - যেকোনো একটি সত্য হলে True হবে।
console.log(p > 2 || q > 15); // true (একটি শর্ত সত্য)

// NOT (!) - শর্ত বিপরীত করে।
console.log(!(p > q)); // true (p > q মিথ্যা ছিল, তাই true দেখাবে)

5️⃣ Assignment Operators (মান নির্ধারণ অপারেটর)

এই অপারেটর দিয়ে ভেরিয়েবলের মান পরিবর্তন করা হয়।

let j = 10;
let k = 20;

j = j + k; // j = 10 + 20 = 30
j += k;    // j = 30 + 20 = 50

j = j - k; // j = 50 - 20 = 30
j -= k;    // j = 30 - 20 = 10

j = j * k; // j = 10 * 20 = 200
j *= k;    // j = 200 * 20 = 4000

j = j / k; // j = 4000 / 20 = 200
j /= k;    // j = 200 / 20 = 10

j %= k;    // j = 10 % 20 = 10 (ভাগশেষ)
j **= k;   // j = 10 ** 20 (10 এর 20 তম ঘাত)
console.log(j);

✅ ব্যাখ্যা:

    += যোগ করে।
    -= বিয়োগ করে।
    *= গুণ করে।
    /= ভাগ করে।
    %= ভাগশেষ দেয়।
    **= ঘাত (Exponent) নির্ণয় করে।

6️⃣ Ternary Operator (শর্টকাট কন্ডিশনাল অপারেটর)

? : দিয়ে if-else এর সংক্ষিপ্ত ফরম্যাট লেখা যায়।

let t = a < b ? 'True' : 'False';
console.log(t); // Output: False (50 < 20 মিথ্যা, তাই 'False' হবে)

✅ ব্যাখ্যা:

    যদি a < b হয়, তাহলে 'True'।
    নাহলে 'False'।

7️⃣ Traditional if-else Statement (যদি-নই শর্ত)

if (a > b) console.log('True');
else console.log('False');

✅ ব্যাখ্যা:

    যদি a > b হয়, তাহলে 'True' প্রিন্ট হবে।
    নাহলে 'False'।

8️⃣ String Variable Example (স্ট্রিং ভেরিয়েবল)

let firstName = 'Ali';

✅ ব্যাখ্যা:

    firstName ভেরিয়েবলে Ali মান সেট করা হয়েছে।
    এটি একটি স্ট্রিং (text) টাইপের ভেরিয়েবল।

🔥 সংক্ষেপে JavaScript Operators Summary:
অপারেটর	কাজ	উদাহরণ
+	যোগ	5 + 2 = 7
-	বিয়োগ	5 - 2 = 3
*	গুণ	5 * 2 = 10
/	ভাগ	10 / 2 = 5
%	ভাগশেষ	10 % 3 = 1
**	ঘাত	2 ** 3 = 8
++	১ বাড়ায়	x++
--	১ কমায়	x--
==	মান চেক	5 == "5" → true
===	মান ও টাইপ চেক	5 === "5" → false
&&	AND (দুইটাই সত্য হলে true)	true && false → false
`		`
!	NOT (বিপরীত করে)	!true → false
