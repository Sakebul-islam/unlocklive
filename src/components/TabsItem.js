'use client';
import { Tabs } from 'flowbite-react';
import React from 'react';

const TabsItem = ({ item, children }) => {
  console.log(item);
  return (
    <Tabs.Item active title={item?.title}>
      {children}
    </Tabs.Item>
  );
};

export default TabsItem;
