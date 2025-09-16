import * as React from 'react';
import styles from './Dropdown.module.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC } from 'react';
import Image from 'next/image';

type Props = {
  label: string;
  description: string;
  options: string[];
  onOptionChange: (tabName: string, dropdownName: string, value: string) => void;
  tabName: string;
  name: string;
  icon: string;
  borderBottomLeftRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopRightRadius?: number;
};

export const Dropdown: FC<Props> = ({
  label,
  description,
  options,
  onOptionChange,
  tabName,
  name,
  icon,
  borderBottomLeftRadius,
  borderTopLeftRadius,
  borderBottomRightRadius,
  borderTopRightRadius,
}) => {
  const [option, setOption] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value as string);
    onOptionChange(tabName, name, event.target.value);
  };

  return (
    <div>
      <Box className={styles.wrapper} sx={{ backgroundColor: 'transparent' }}>
        <FormControl>
          <InputLabel
            className={styles.title}
            sx={{
              '&.Mui-focused, &.MuiInputLabel-shrink': {
                top: 14,
              },
            }}
          >
            <Image width={27} height={27} src={icon} alt={label} />
            <div>
              <p className={styles.description}>{description}</p>
              <p>{label} </p>
            </div>
          </InputLabel>
          <Select
            className={styles.wrapper}
            value={option}
            label={label}
            onChange={handleChange}
            sx={{
              borderBottomLeftRadius,
              borderTopLeftRadius,
              borderBottomRightRadius,
              borderTopRightRadius,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#dbe1cd',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#61635a',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#dbe1cd',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
