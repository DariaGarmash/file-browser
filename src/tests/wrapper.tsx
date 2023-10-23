import React, { PropsWithChildren, ReactElement } from 'react'
import { RenderOptions, render } from '@testing-library/react'
import { Provider } from "react-redux";
import store,  { RootState } from "../store/store";
import { PreloadedState } from 'redux';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  preloadedState?: PreloadedState<RootState>,
  store?: RootState
}

const providerWrapper = ({children}: PropsWithChildren<{}>) => {
    return <Provider store={store}>{children}</Provider>
}
  
export const renderWithStore = (
    ui: ReactElement,
    options?: ExtendedRenderOptions,
) => render(ui, {wrapper: providerWrapper, ...options})