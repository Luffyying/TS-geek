import {parser} from '../1.qs'
describe('测试是否合法',()=>{
    it('测试parser是否能解析数据',()=>{
        //断言
        expect(parser("name=zf")).toEqual({name:'zf'}) 
        // expect(parser("name=ze")).toEqual({name:'ze'})
    })
    // it('测试2',()=>{
    //     expect(parser("name=ze").toBe({name:'ze'}))
    // })
})
//  jest --watchAll
// 有git 后使用jest --watch 只测试改变的，测过的（提交后的）不测试
//describe 是分组
//it 是用例
// 匹配 相等 不相等 包含
// it('测试两个值是否相等',()=>{
//     expect(1+1).toBe(2)
//     // expect({name:1}).toBe({name:1})
//     expect({name:1}).toEqual({name:1})
// })
// it('测试两个值不相等',()=>{
//     expect(1+1).not.toBe(2)
//     expect(3).toBeLessThan(5)
//     expect(3).toBeGreaterThan(5)
//     // expect({name:1}).toBe({name:1})
//     expect({name:1}).toEqual({name:1})
// })
// it('测试是否包含',()=>{
//     expect('hello world').toContain('hello')
//     expect('hello world').toMatch(/hello/)//可以匹配正则
// })
//jest jsdom 可以测试dom
//删除节点
// export const removeNode = node => {
//     node.parentNode.removeChild(node)
// }
//1:3


