import { ShallowWrapper } from "enzyme";

export const findByAttr = (component: ShallowWrapper, dataTest: string) => {
  return component.find(`[data-test='${dataTest}']`);
};