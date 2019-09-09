//测试dom如何测试
import {removeNode} from './qs.spec'
it('测试能否成功删除元素',()=>{
    document.body.innerHTML = `<div><button>sdfsdf</button></div>`
    let button = document.querySelector('button')
    expect(button).not.toBe(null)
    removeNode(button)
    button = document.querySelector('button')
    expect(button).toBe(null)

})
//默认jest 里有jsdom配置