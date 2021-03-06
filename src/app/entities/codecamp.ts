import { Talk } from './talk';

export class CodeCamp {
  constructor(
    public campId?: number,
    public name?: string,
    public venue?: string,
    public eventDate?: string,
    public duration?: number,
    public talks?: Array<Talk>
  ) {}
}
