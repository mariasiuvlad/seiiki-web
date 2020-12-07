import {Button, Flex, Heading, View} from '@adobe/react-spectrum';
import React from 'react';
import FullScreenLayout from '../components/FullScreenLayout';
import useHeatingAgent from '../lib/heating/useHeatingAgent';

export default function Heating() {
  const {status, toggle} = useHeatingAgent();

  return (
    <FullScreenLayout>
      <Flex flexGrow={1} alignItems='center' justifyContent='center'>
        <View
          width='size-4600'
          paddingX='size-400'
          paddingY='size-200'
          borderRadius='regular'
          borderWidth='thin'
        >
          <Flex
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Heading level={3}>heating {status ? 'on' : 'off'}</Heading>
            <Button variant='cta' onPress={toggle}>
              turn {status ? 'off' : 'on'}
            </Button>
          </Flex>
        </View>
      </Flex>
    </FullScreenLayout>
  );
}
