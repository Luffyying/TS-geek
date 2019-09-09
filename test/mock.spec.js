import { forEachChild } from "typescript";

//测试foreach
it('测试foreach是否靠谱',()=>{
    //mock函数  mock出来的数据 可以记录当前调用的参数 和状态
    let fn = jest.fn
    forEachChild([1,2,3].fn)
    expect(fn.mock.calls.length).toBe(3)
    expect(fn.mock.calls[0][0]).toBe(1)
    expect(fn.mock.calls[1][0]).toBe(2)
    expect(fn.mock.calls[2][0]).toBe(3)
})

it('测试fetchList 能否获取列表',()=>{
    return fetchList().then(data =>{
        expect(data).toEqual({})
    })
})
export const fetch = ()=>{
    return axios.get('/list')
}



// npx jest init
// 类库 测试覆盖率100% 组件的话是80%左右  一般都是单元测试(前端一般没有e2e测试)
// jest.config.jest
// 如何测试组件？？vue
// import HelloWold form './HelloWold.vue'
it('如果传入的message，能否正常渲染到h1中',()=>{
    // let baseVue = Vue.extend(HelloWold)
    // new baseVue({
    //     propsData:{
    //         msg:'hello'
    //     }
    // }).$mount();//默认挂载到vm.$el
    // expect(vm.$el.innerHTml).toMatch('hello')
    // vm.$destory();
    let wrapper = shallowMount(HelloWold,{
        props:{

        }
    })
    expect(wrapper.find('h1').text()).toMatch(/hello/)
})
//tdd & bdd 
//tdd 测试驱动 先写测试，ui测试尽量不要用  工作量很大
//dbb集成测试

it('测试在输入框中输入数据放到实例里面',()=>{
    // let wrapper = shallowMount(Todo)
    // let input = wrapper.find('input')
    // input.setValue('hello')
    // expect()
    // .......
})





