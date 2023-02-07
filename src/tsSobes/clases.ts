interface PersonProp {
  name: string;
  secondName: string;
}

export class Person {
  name: string;
  secondName: string;
  constructor(personInfo: PersonProp) {
    this.name = personInfo.name;
    this.secondName = personInfo.secondName;
  }

  say(){
    console.log("hello")
  }

}

class PersonWithJob extends Person {
  private job: string;

  constructor(personInfo: PersonProp, job: string) {
    super(personInfo);
    this.job = job;
  }
  say(): void {
    super.say()
    console.log(this.name)
  }
}

const personWithJob = new PersonWithJob(
  { name: "anton", secondName: "cramar" },
  "doctor"
);

export const say = personWithJob.say()
