/*
 * action types
 */

export const TEST_CLICK = 'TEST_CLICK'

export function testClick(action = 'test') {
  console.log(action);
  return {
    type: TEST_CLICK,
    payload: action
  }
}

