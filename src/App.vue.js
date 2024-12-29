import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import ReloadPWA from "./components/ReloadPWA.vue";
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['router-link-exact-active', 'logo',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(Object.assign(Object.assign({ alt: ("Vue logo") }, { class: ("logo") }), { src: ("@/assets/logo.svg"), width: ("125"), height: ("125") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("wrapper") }));
    // @ts-ignore
    /** @type { [typeof ReloadPWA, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ReloadPWA, new ReloadPWA({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    // @ts-ignore
    /** @type { [typeof HelloWorld, ] } */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(HelloWorld, new HelloWorld({
        msg: ("You did it!"),
    }));
    const __VLS_6 = __VLS_5({
        msg: ("You did it!"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
    const __VLS_10 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        to: ("/"),
    }));
    const __VLS_12 = __VLS_11({
        to: ("/"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_15.slots.default;
    var __VLS_15;
    const __VLS_16 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
        to: ("/about"),
    }));
    const __VLS_18 = __VLS_17({
        to: ("/about"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    __VLS_21.slots.default;
    var __VLS_21;
    const __VLS_22 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */ ;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent(__VLS_22, new __VLS_22({}));
    const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
    ['logo', 'wrapper',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            RouterLink: RouterLink,
            RouterView: RouterView,
            HelloWorld: HelloWorld,
            ReloadPWA: ReloadPWA,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
