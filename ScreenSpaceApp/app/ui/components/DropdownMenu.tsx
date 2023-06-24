import React from 'react';
import {Box, Center, CheckIcon, Select} from 'native-base';

const DropdownMenu = (params: {
  purpose: string;
  disabled: any;
  options: string[];
  onChange: any;
  valueSelected?: string;
}) => {
  const valueSelected = params.valueSelected ?? '';
  const [service, setService] = React.useState(valueSelected);
  const onChange = params.onChange;
  const renderOptions = () => {
    const elements = [];
    for (let count = 0; count < params.options.length; count++) {
      const opt = params.options[count];
      elements.push(<Select.Item key={count} label={opt} value={opt} />);
    }
    return elements;
  };
  return (
    <Center>
      <Box maxW="300">
        <Select
          selectedValue={service}
          isDisabled={params.disabled}
          minWidth="310"
          accessibilityLabel="Select"
          borderRadius="12"
          placeholder={`Select ${params.purpose}`}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={onChange}>
          {renderOptions()}
        </Select>
      </Box>
    </Center>
  );
};

export default DropdownMenu;
