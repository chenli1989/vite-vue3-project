import { ref } from "vue";

const com = () => {
  const state = ref(0);
  return ({}, ctx: { slots: { default?: () => any; }; }) => {
    return <div>
      test:::
      {ctx.slots.default ? ctx.slots.default() : null}
    </div>
  }
}
export default com();
