import { Component, DoCheck } from '@angular/core';
import { TaskViewModel } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements DoCheck {
  public img: string = "assets/imgs/bg-task.png"
  public taskList: TaskViewModel[] = [];
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    this.taskList = JSON.parse(this.storage.getItem("list") || '[]');
  }

  ngDoCheck(): void {
    if(this.taskList) {
      this.short();
      this.setListLocalStorage();
    }

  }

  removeTask(index: number):void {
    this.taskList.splice(index, 1);
  }

  deleteAll(): void {
    const confirm = window.confirm("Deseja excluir todas as tarefas? ")
    if (confirm) {
      this.taskList = [];
    }
  }

  addTask(name: string): void {
    this.taskList.push({name: name, done: false})
  }

  short(): void {
    this.taskList.sort((first, last) => Number(first.done) - Number(last.done));
  }

  validationInput(name: string, index: number): void {
    if (!name.length) {
      const confirm = window.confirm("Nome da tarefa vazia, deseja deletar?");

      if (confirm) {
        this.removeTask(index);
      }
    }
  }

  setListLocalStorage(): void {
    this.storage.setItem("list", JSON.stringify(this.taskList));
  }
}
