function countPerson(persons) {
  let dem = 0;
  for (let index = 0; index < persons.length; index++) {
    if (persons[index].yearOfBirth >= 2000) dem++;
  }
  return dem;
}

function main() {
  const persons = [
    {
      name: "Loc",
      yearOfBirth: 2000,
    },
    {
      name: "Nhat",
      yearOfBirth: 2003,
    },
    {
      name: "Hien",
      yearOfBirth: 2001,
    },
  ];

  let result = countPerson(persons);
  console.log(result);
}

main();
