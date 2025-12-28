import { css } from '@acab/ecsstatic';
import { clsx } from '@sledge/core';
import { RouteSectionProps } from '@solidjs/router';
import { Component } from 'solid-js';
import WikiSection from '~/components/wiki/WikiSection';
import WikiSectionItem from '~/components/wiki/WikiSectionItem';
import { pageRoot, simpleScrollbar } from '~/styles';

const menuBar = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 400px;
  border-right: 1px solid var(--color-border);
  padding: 48px;
  gap: 16px;
  overflow-y: auto;
`;
const content = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
`;

const WikiWrapper: Component<RouteSectionProps> = (props) => {
  return (
    <main class={pageRoot}>
      <div class={clsx(menuBar, simpleScrollbar)}>
        <WikiSection title='introduction'>
          <WikiSectionItem title='Get Started' href='/wiki/introduction/get_started' hrefAlt={['/wiki']} />
          <WikiSectionItem title='How To Install' href='/wiki/introduction/how_to_install' />
        </WikiSection>

        <WikiSection title='tool'>
          <WikiSectionItem title='Pen' href='/wiki/tools/pen' iconSrc='/wiki/icons/wiki_pen.png' />
          <WikiSectionItem title='Eraser' href='/wiki/tools/eraser' iconSrc='/wiki/icons/wiki_eraser.png' />
          <WikiSectionItem title='Fill' href='/wiki/tools/fill' iconSrc='/wiki/icons/wiki_fill.png' />
          <WikiSectionItem title='Selections' href='/wiki/tools/selections' iconSrc='/wiki/icons/wiki_selections.png' />
          <WikiSectionItem title='Move' href='/wiki/tools/move' iconSrc='/wiki/icons/wiki_move.png' />
        </WikiSection>

        <WikiSection title='project'>
          <WikiSectionItem title='Canvas' href='/wiki/project/canvas' iconSrc='/wiki/icons/wiki_canvas.png' />
          <WikiSectionItem title='Layer' href='/wiki/project/layer' iconSrc='/wiki/icons/wiki_layer.png' />
          <WikiSectionItem title='Image Pool' href='/wiki/project/image' iconSrc='/wiki/icons/wiki_image_pool.png' />
          <WikiSectionItem title='Effects' href='/wiki/project/effects' iconSrc='/wiki/icons/wiki_effects.png' />
        </WikiSection>

        <WikiSection title='I/O'>
          <WikiSectionItem title='Supported files' href='/wiki/io/supported_files' iconSrc='/wiki/icons/wiki_supported_files.png' />
          <WikiSectionItem title='Import' href='/wiki/io/import' iconSrc='/wiki/icons/wiki_import.png' />
          <WikiSectionItem title='Export' href='/wiki/io/export' iconSrc='/wiki/icons/wiki_export.png' />
          <WikiSectionItem title='Clipboard' href='/wiki/io/clipboard' iconSrc='/wiki/icons/wiki_clipboard.png' />
        </WikiSection>

        <WikiSection title='other'>
          <WikiSectionItem title='Onscreen Control' href='/wiki/others/onscreen_control' iconSrc='/wiki/icons/wiki_onscreen_control.png' />
        </WikiSection>
      </div>
      <div class={clsx(content, simpleScrollbar)}>{props.children}</div>
    </main>
  );
};

export default WikiWrapper;
