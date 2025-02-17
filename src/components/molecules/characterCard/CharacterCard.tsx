import { Layout, Flex, Image } from "antd";
import { FC, memo } from "react";
import { CharacterCardProps } from "./CharacterCard.types";
import card from "@assets/card.png";
import cardPreview from "@assets/card_preview.png";
import {
  characterCardaFooterStyle,
  characterCardContentStyle,
  characterCardHeaderStyle,
  characterCardNameStyle,
  characterCardStyle,
  characterCardCopyrightStyle,
} from "./CharacterCard.style";

const CharacterCard: FC<CharacterCardProps> = memo(({ name, cardNumber }) => {
  return (
    <Layout style={characterCardStyle}>
      <Layout.Header style={characterCardHeaderStyle}>
        <Flex style={characterCardNameStyle}>{name}</Flex>
      </Layout.Header>
      <Layout.Content style={characterCardContentStyle}>
        <Image
          src={card}
          width={160}
          placeholder={<Image preview={false} width={160} src={cardPreview} />}
        />
      </Layout.Content>
      <Layout.Footer style={characterCardaFooterStyle}>
        <Flex vertical align="flex-end" gap="middle">
          <span>
            <i>{cardNumber}</i>
          </span>
          <span style={characterCardCopyrightStyle}>(C) Copyright - 2025</span>
        </Flex>
      </Layout.Footer>
    </Layout>
  );
});

export default CharacterCard;
