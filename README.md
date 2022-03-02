
# Flexible-react-form-elements




## Installation

Install my-project with npm

```bash
  npm install flexible-react-form-elements
```

    
## Usage
In a React app, you can use form elements like this:

### Input Elements
`import { Input } from 'flexible-react-form-elements'` 

### Dropdown
`import { Selectmenu } from 'flexible-react-form-elements'` 

### Textarea
`import { Textarea} from 'flexible-react-form-elements'` 

### Checkbox
`import { Checkbox } from 'flexible-react-form-elements'` 

### Submit Button
`import { SubmitButton} from 'flexible-react-form-elements'` 



# Documentation

## Input Props

| Props  | value |
| ------------- | ------------- |
| label | string  |
| type | text/number/email/password  |
| name| string  |
| value| value  |
| placeholder| string  |
| onChange| function()  |
| width| custom width size  |
| padding| custom padding size |


## Selectmenu

| Props  | value |
| ------------- | ------------- |
| label | string  |
| name| string  |
| onChange| function()  |
| options| array of objects  |


array of objects = [ {displayName: ' ', value: ' '}]



## Textarea

| Props  | value |
| ------------- | ------------- |
| label | string  |
| placeholder| string  |
| name| string  |
| value| value  |
| onChange| function()  |


## Checkbox 

| Props  | value |
| ------------- | ------------- |
| label | string  |
| name| string  |
| checked| boolean  |
| onChange| function()  |


## SubmitButton

#### variant 
'primary', 'secondary', 'info', 'success', 'warning', 'error', 'light', 'dark'

### For custom button color

#### colorCode
'#yourcolorcode'

#### textColor
'#yourcolorcode'

---
#### placement 
'center'

#### size

'small', 'medium'

#### disabled
boolean :- 'true', 'false'

#### onSubmit
function()