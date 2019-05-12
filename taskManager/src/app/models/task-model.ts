import { DocIdModel } from './doc-id-model';

export interface TaskModel extends DocIdModel {
  name: string;
  content: string;
  time: string;
  date: Date;
}
