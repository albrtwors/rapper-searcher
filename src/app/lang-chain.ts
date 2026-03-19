import { Injectable } from '@angular/core';
import { ChatGroq } from "@langchain/groq";
@Injectable({
  providedIn: 'root',
})
export class LangChain {

  poderosisimo = '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'
  model: any

  sayHello() {
    console.log('hello')
  }

  async searchRapper({ message }: any) {
    const model = new ChatGroq({ model: 'openai/gpt-oss-120b', temperature: 0, apiKey: this.poderosisimo })
    const result = await model.invoke([{ role: 'system', content: 'Eres el mayor experto en raperos si el usuario te pregunta un rapero debes saber responderlo. Si el usuario te pide una persona que no es un rapero dile que no lo puedes ayudar con eso. Las respuestas las devolveras como texto simple' }, { role: 'human', content: message }])

    return result.content

  }




}
