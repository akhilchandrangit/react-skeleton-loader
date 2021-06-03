import React from "react";
import { storiesOf } from "@storybook/react";
import README from '../README.md';

const stories = storiesOf("README", module);

stories.addParameters({
  readme: {
    content: README,
  },
});

stories.add("README.md", () => (
  <></>
));