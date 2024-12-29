import { useRegisterSW } from "virtual:pwa-register/vue";
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
async function close() {
    offlineReady.value = false;
    needRefresh.value = false;
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    if (__VLS_ctx.offlineReady || __VLS_ctx.needRefresh) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("flex flex-wrap") }, { role: ("alert") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("message mt-1") }));
        if (__VLS_ctx.offlineReady) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: ("buttons flex align-middle mt-2 md:mt-0") }));
        if (__VLS_ctx.needRefresh) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.offlineReady || __VLS_ctx.needRefresh)))
                        return;
                    if (!((__VLS_ctx.needRefresh)))
                        return;
                    __VLS_ctx.updateServiceWorker();
                } }, { class: ("button") }));
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.close) }, { class: ("button") }));
    }
    ['flex', 'flex-wrap', 'message', 'mt-1', 'buttons', 'flex', 'align-middle', 'mt-2', 'md:mt-0', 'button', 'button',];
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
            offlineReady: offlineReady,
            needRefresh: needRefresh,
            updateServiceWorker: updateServiceWorker,
            close: close,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
