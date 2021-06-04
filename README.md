<h1 align="center">Welcome to react-skeleton-load 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-skeleton-loader" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-skeleton-loader.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Skeleton loader for react

### 🏠 [Homepage](https://github.com/akhilchandrangit/react-skeleton-loader)

## Installation and usage

Install react-skeleton-load

```sh
npm i react-skeleton-load
```
```sh
yarn add react-skeleton-load
```

Now you can import react-skeleton-load in any of your components

```javascript
import SkeletonLoader from 'react-skeleton-load';

const Articles = () => {
  return (
    <SkeletonLoader height={20} width={100} />
  )
}
```

## Props
### height (number | string)
number

Required

Height of loader(px)
```javascript
 <SkeletonLoader height={30} />
```
### width (number | string)
Required

Width of loader
```javascript
 <SkeletonLoader height={30} width={150} />
 <SkeletonLoader height={30} width="50%" />
```
### count (number)

Default: 1

Specifies the number of loaders to be rendered.
```javascript
 <SkeletonLoader height={30} count={4} />
```
### className (string)

Custom class name for loader element
```javascript
 <SkeletonLoader height={30} className="my-custom-class" />
```

### wrapperClass (string)

Custom class name for wrapper element
```javascript
 <SkeletonLoader height={30} wrapperClass="my-custom-class" />
```

### color (string)

Custom color for loader in hex
```javascript
 <SkeletonLoader height={30} color="#F5A492" />
```

### style (React.CSSProperties)

Custom styles for loader element. Any of the properties in React's CSSProperties can be used.
```javascript
 <SkeletonLoader height={30} style={{ marginRight: '10px' }} />
```

### shape ("rectangle" | "circle")

Default: "rectangle"

Defines the shape of loader.
```javascript
 <SkeletonLoader height={30} width={30} shape="circle" />
```

### hideAnimation (boolean)

Default: false

If set to true, the loader animation will be stopped.
```javascript
 <SkeletonLoader height={30} width={30} hideAnimation />
```

### hideGradient (boolean)

Default: false

If set to true, the background gradient will be removed.
```javascript
 <SkeletonLoader
  height={30}
  width={30}
  color="#F5A492"
  hideGradient
/>
```


### borderRadius (number | string)

Changes the border radius of loader.
```javascript
 <SkeletonLoader height={30} borderRadius={8} />
```

## Author

👤 **Akhil**

* Website: https://github.com/akhilchandrangit/react-skeleton-loader
* Github: [@akhilchandrangit](https://github.com/akhilchandrangit)

## Show your support

Give a ⭐️ if this project helped you!
