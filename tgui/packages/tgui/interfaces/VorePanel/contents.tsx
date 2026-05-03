import { Box, Button, Collapsible, Flex, Icon, LabeledList, NoticeBox, Section, Tabs } from "tgui/components";
import { useBackend } from "../../backend";
import { Window } from '../../layouts';
import type { LangKeys, my_belly_contents } from './types';

export const ContentsSection = (lang_provider : LangKeys, context) => {
  const { data, act } = useBackend<my_belly_contents[]>(context);
  
  return (
	<Section title={lang_provider.section_contents_name}>
		<Flex fill>
			{data.map((belly_item, i) => {
				<Flex.Item basic="33%">
					<Button>
						<img
							src={"data:image/png;base64, " + belly_item.icon}
							width="64px"
							height="64px"
							style={{
								imageRendering: 'pixelated',
								'margin-left': '-5px',
							}}
						/>
					</Button>
				</Flex.Item>
			} )}
		</Flex>
	</Section>
  );
}; 