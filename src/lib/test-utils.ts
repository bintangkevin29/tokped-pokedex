import { ShallowWrapper, ReactWrapper } from "enzyme";

export const findByAttr = (component: ShallowWrapper | ReactWrapper, dataTest: string) => {
  return component.find(`[data-test='${dataTest}']`);
};

export const findByClassName = (component: ShallowWrapper | ReactWrapper, dataTest: string) => {
  return component.find(`.${dataTest}`);
};