import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}
export type NextPageWithLayouts = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};
export type AppPropsWithLayouts = AppProps & {
  Component: NextPageWithLayouts;
};
