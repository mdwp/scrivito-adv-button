import * as Scrivito from 'scrivito';
import * as React from 'react';
import "./AdvButtonWidgetClass";
import "./AdvButtonWidgetComponent";
import "./AdvButtonWidgetEditingConfig";

const HeadchorWidget = Scrivito.provideWidgetClass("HeadchorWidget", {
  attributes: {
    headline: "string",
    anchorId: "string",
    level: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    style: ["enum", { values: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    showDividingLine: ["enum", { values: ["yes", "no"] }],
    showMargin: ["enum", { values: ["yes", "no"] }],
  },
});

/*registerTextExtract("HeadchorWidget", [
  { attribute: "headline", type: "string" },
]);*/

Scrivito.provideEditingConfig("HeadchorWidget", {
  title: "Headline with anchor id",
  attributes: {
    style: {
      title: "Style",
      description: "Size and font of this headline. Default: Heading 2",
      values: [
        { value: "h1", title: "Heading 1" },
        { value: "h2", title: "Heading 2" },
        { value: "h3", title: "Heading 3" },
        { value: "h4", title: "Heading 4" },
        { value: "h5", title: "Heading 5" },
        { value: "h6", title: "Heading 6" },
      ],
    },
    anchorId: {
      title: "Anchor id",
      description: "Set a value for anchor id, e.g. 'section-1'",
    },
    level: {
      title: "Heading tag (optional)",
      description:
        "May be used for SEO, for generating a table of contents," +
        " or for improving accessibility. Default: Derived from Style",
      values: [
        { value: "h1", title: "h1" },
        { value: "h2", title: "h2" },
        { value: "h3", title: "h3" },
        { value: "h4", title: "h4" },
        { value: "h5", title: "h5" },
        { value: "h6", title: "h6" },
      ],
    },
    alignment: {
      title: "Alignment",
      description: "Default: Left",
      values: [
        { value: "left", title: "Left" },
        { value: "center", title: "Center" },
        { value: "right", title: "Right" },
      ],
    },
    showDividingLine: {
      title: "Show dividing line?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
    showMargin: {
      title: "Show margin?",
      description: "A margin adds space around this headline. Default: Yes",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["style","anchorId", "level", "alignment", "showDividingLine", "showMargin"],
  initialContent: {
    alignment: "left",
    headline: "Lorem Ipsum",
    showDividingLine: "no",
    showMargin: "yes",
    style: "h2",
  },
});

Scrivito.provideComponent("HeadchorWidget", ({ widget }) => {
  const style = widget.get("style") || "h2";
  const level = widget.get("level") || style;
  const classNames = [style];
  const anchorId = widget.get("anchorId");

  if (widget.get("alignment")) {
    classNames.push(`text-${widget.get("alignment")}`);
  }
  if (widget.get("showDividingLine") === "yes") {
    classNames.push("b-bottom");
  }
  if (widget.get("showMargin") === "no") {
    classNames.push("no-margin");
  }

  return (

    <Scrivito.ContentTag
      tag={level}
      content={widget}
      attribute="headline"
      className={classNames.join(" ")}
      id={anchorId}
    />

  );
});

export default HeadchorWidget;