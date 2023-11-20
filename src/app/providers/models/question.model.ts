export class Question {
  id: string;
  type: QuestionType;
  range?: RangeQuestion;
  input?: unknown;
  question: Content[];
}

export enum QuestionType {
  Checkbox = 'checkbox',
  Input = 'input', // should be text
  Radio = 'radio',
  Range = 'range',
}

export type RangeQuestion = {
  min?: number;
  max?: number;
  value?: number;
};

export type Content = {
  locale: string;
  content: string;
}
