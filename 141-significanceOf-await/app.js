//await is used as promise to resolve error/ question in JS
//const answers = await  function(){try{
//} catch (error) {
//}(err:any)  =>{
//  console.log(err);
//return "default answers";
//};
//}
const data = ['Ali', 'Hashir', 'Dua', 'Zara'];
for (let i = 0; i < data.length; i++) {
    const response = await data.fetch([i]);
    const response_data = await Response.json(data);
    data.push(response_data);
}
export {};
