export const createAnswers=bank=>bank.map(()=>null);
export function choose(bank,answers,index,option){
 if(!bank[index]||!Number.isInteger(option)||option<0||option>=bank[index].options.length||answers[index]!==null)return answers;
 return answers.map((a,i)=>i===index?option:a);
}
export function stats(bank,answers){const answered=answers.filter(a=>a!==null).length,correct=bank.filter((q,i)=>answers[i]===q.answer).length;return {answered,correct,total:bank.length,complete:answered===bank.length};}
