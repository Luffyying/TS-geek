import { get } from "http";
import { isExportDeclaration } from "typescript";

//如何测试异步
// import xxxx
// callback promise
// export getData = 
it('传入callback后能否拿到最后的结果',(done)=>{
    expect.assertions(1)
    //至少执行一次断言
    getData((data)=>{
        expect(data).toEqual({name:'sss'})
        done();//结束的标识
    })
})
it('测试promise',()=>{
    expect.assertions(1)
    //至少执行一次断言
    return getData().then(data=>{
        expect(data).toEqual({name:'sdf'})
    })
})
it.only('测试promise',async ()=>{
    let d = await getData();
    expect(d).toEqual({})
})
//直接返回或者使用await