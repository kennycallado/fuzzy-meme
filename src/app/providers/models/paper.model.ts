import { Answer } from "./answer.model";
import { Resource } from "./resource.model";

export class Paper {
  id: string;
  user: string; // user id
  resource: string | Resource; // resource id
  completed: boolean;
  answers?: string[] | Answer[];
}

export class PaperToPush {
  id: string;
  user: string; // user id
  resource: string; // resource id
  completed: boolean;
  answers?: string[];

  constructor(id: string, user: string, resource: Resource, completed: boolean, answers?: string[] | Answer[]) {
    this.id = id;
    this.user = user;
    this.resource = resource.id;
    this.completed = completed;
    this.answers = answers ? answers.map((answer: any) => typeof answer === 'string' ? answer : answer.id) : [];
  }
}

export class PaperWithResource {
  id: string;
  user: string; // user id
  resource: Resource; // resource id
  completed: boolean;
  answers?: Answer[];
}
