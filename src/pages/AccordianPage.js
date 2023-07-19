import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dwd1dd",
      label: "label1",
      content: "content1",
    },
    {
      id: "wer23",
      label: "label2",
      content: "content2",
    },
    {
      id: "ktui4g",
      label: "label3",
      content: "content3",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
