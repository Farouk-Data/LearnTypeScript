function testing(person: string, date: Date)
{
    console.log('The person is ' , person , ' date is ', date.toDateString()  );
}

testing('test', new Date());