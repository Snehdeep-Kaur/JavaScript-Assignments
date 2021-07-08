//Problem 1: Fizz Buzz Problem without modulus

for(i=1;i<=100;i++)
{
  if((i-3*parseInt(i/3)==0)&&(i-5*parseInt(i/5)==0))
  {
    console.log("FizzBuzz");
  }
  else if(i-3*parseInt(i/3)==0)
  {
    console.log("Fizz");
  }
  else if(i-5*parseInt(i/5)==0)
  {
    console.log("Buzz");
  }
  else
  {
    console.log(i);
  }
}


//Problem 2: Print all the palindrome words in a string

s="madam arora teaches civics and malayalam" 
const arr=s.split(" ")
for(i of arr)
{
  const rarr=i.split("")
  const newr=rarr.reverse()
  r=newr.join("")
  if(i==r)
  {
    console.log(i)
  }
}
