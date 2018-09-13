export class Task {
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public dateStart?: string,
    public dateEnd?: string,
    public status: string = 'Запланировано'
  ) {}
}
