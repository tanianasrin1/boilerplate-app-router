import { useEffect, useState } from "react";

export function CMS(data1) {
  const [data, setData] = useState(null);
  const { title, slug } = data1;


  useEffect(() => {
    if (data1?.sections && Array.isArray(data1.sections)) {
      const convertedData = { title: title, slug: slug };

      const processItems = (items) => {
        if (Array.isArray(items)) {
          const convertedData2 = {};
          items.forEach((data2) => {
            const { title, contents, items: nestedItems } = data2;

            if (nestedItems) {
              convertedData2[title] = processItems(nestedItems);
            } else {
              convertedData2[title] = contents;
            }
          });
          return convertedData2;
        } else {
          return items;
        }
      };

      data1.sections.forEach((section) => {
        const { title, items } = section;

        const processedItems = processItems(items);
        convertedData[title] = processedItems;
      });
      setData(convertedData);
    }
  }, [data1]);

  return data;
}
export function CMS2(data1) {
  const [data, setData] = useState(null);
  const { title, slug } = data1;


  useEffect(() => {
    if (data1?.sections && Array.isArray(data1.sections)) {
      const convertedData = { title: title, slug: slug };
      data1.sections.forEach((section) => {
        const { title, items } = section;

        const processedItems = items;
        convertedData[title] = processedItems;
      });
      setData(convertedData);
    }
  }, [data1]);

  return data;
}