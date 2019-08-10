import React from 'react';
import { Item, Loader } from 'semantic-ui-react';

type Props = {
  title: string;
  meta: string;
  description: string[];
  stack: string[];
  link: string;
  img: string;
  github: string;
};

export default function Project({
  title,
  meta,
  description,
  stack,
  link,
  img,
  github
}: Props) {
  const icons =
    stack &&
    stack.length &&
    stack.map(tech => {
      return (
        <img
          key={tech}
          alt={tech + 'icon'}
          style={styles.svg}
          src={require(`../assets/${tech}`)}
        />
      );
    });

  const formattedDescription =
    description &&
    description.length &&
    description.map(sentence => {
      return (
        <Item.Description key={sentence.length}>{sentence}</Item.Description>
      );
    });
  return (
    <Item>
      <Item.Image style={styles.image} src={img} size='large' />

      <Item.Content verticalAlign='middle'>
        <Item.Header as='a' target='_blank' href={link}>
          {title}
        </Item.Header>

        <Item.Meta as='h3'>{meta}</Item.Meta>
        <Item.Meta as='a' target='_blank' href={github}>
          Check me out on Github!
        </Item.Meta>
        <Item.Description>{formattedDescription}</Item.Description>
        <Item.Extra>{icons ? icons : <Loader />}</Item.Extra>
      </Item.Content>
    </Item>
  );
}

const styles = {
  svg: {
    width: 72,
    height: 72,
    padding: 8
  },
  image: {
    height: 450
  }
};
