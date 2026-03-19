import { Component, inject, signal } from '@angular/core';
import { LangChain } from '../../lang-chain';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.html',
  styleUrl: './index.css',
})
export class Index {

  RapperName: any = signal('')
  lang: any = inject(LangChain)
  message = signal('')
  sayHello() {
    this.lang.sayHello()
  }

  async onSubmit(event: any) {
    event.preventDefault()
    const data: any = Object.fromEntries(new FormData(event.target).entries())
    const res = await this.lang.searchRapper({ message: data.name })
    this.message.set(res)


  }
}
