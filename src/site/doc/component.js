import PortraitPush from './component/PortraitPush/index.vue'
import TransversePush from './component/TransversePush/index.vue'
import AutoScroll from './component/AutoScroll/index.vue'
const component = [
    {
        name: 'PortraitPush',
        component: PortraitPush,
        des: 'PortraitPush 纵向PUSH动画'
    },
    {
        name: 'TransversePush',
        component: TransversePush,
        des: 'TransversePush 横向PUSH动画'
    },
    {
        name: 'AutoScroll',
        component: AutoScroll,
        des: 'AutoScroll 自动滚动'
    },
];

component.forEach(function(item){
    item.path = `/component/${item.name}`;
});
export default component;