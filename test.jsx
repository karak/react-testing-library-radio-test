const React = require("react");
const { render, fireEvent, cleanup } = require("@testing-library/react");

describe("radio", () => {
  let targetValue;
  let wrapper;

  beforeEach(() => {
    const handleChange = jest.fn(({ target: { value }}) => targetValue = value);
    wrapper= render(
      <div>
        <label>
          orange
          <input name="cart" type="radio" value="0" defaultChecked={false} onChange={handleChange} />
        </label>
        <label>
          apple
          <input name="cart" type="radio" value="1" defaultChecked={false} onChange={handleChange} />
        </label>
      </div>
    );
  });

  afterEach(() => {
    cleanup();
  });

  describe("on click", () => {
    beforeEach(() => {
      fireEvent.click(getByLabelText("orange"));
    })

    it("set checked attribute", () => {
      const { getByLabelText } = wrapper;
      expect(getByLabelText("orange")).toHaveProperty("checked", true);
    });

    it("fires change event", () => {
      expect(handleChange).toBeCalled();
    });

    it("passes value of clicked input", () => {
      expect(targetValue).toEqual("0")
    });  
  })
});
