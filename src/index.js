import Vue from "vue";
import PortraitPush from 'packages/PortraitPush';
import TransversePush from 'packages/TransversePush';
import AutoScroll from 'packages/AutoScroll'

const components = [
    PortraitPush,
    TransversePush,
    AutoScroll
];

const install = function(Vue){
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export {
    AutoScroll,
    PortraitPush,
    TransversePush,
};
export default install;