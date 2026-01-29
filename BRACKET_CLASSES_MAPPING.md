# Bracket CSS Classes Mapping

This document lists all CSS classes that contained brackets and their renamed versions.

## Renaming Rules

- Remove brackets `[` and `]`
- Replace `#` in hex colors with nothing and lowercase: `#1A1A1A` → `1a1a1a`
- Replace dots in values with hyphens: `11.25rem` → `11-25rem`
- Replace colons in responsive prefixes with hyphens: `mobile:w-[...]` → `mobile-w-...`
- Handle negative signs: `-mt-[1.625em]` → `neg-mt-1-625em`

## Color Classes

| Old Class Name | New Class Name |
|----------------|----------------|
| `bg-[#1A1A1A]` | `bg-1a1a1a` |

## Layout Classes

| Old Class Name | New Class Name |
|----------------|----------------|
| `min-h-[11.25rem]` | `min-h-11-25rem` |
| `min-h-[100vh]` | `min-h-100vh` |
| `z-[4]` | `z-4` |
| `z-[6]` | `z-6` |
| `z-[1]` | `z-1` |
| `z-[0]` | `z-0` |

## Spacing Classes

| Old Class Name | New Class Name |
|----------------|----------------|
| `px-[5rem]` | `px-5rem` |
| `pt-[3rem]` | `pt-3rem` |
| `pl-[1.22rem]` | `pl-1-22rem` |
| `pl-[1.75rem]` | `pl-1-75rem` |
| `pl-[2.02rem]` | `pl-2-02rem` |
| `pl-[1.25rem]` | `pl-1-25rem` |
| `pl-[11.57rem]` | `pl-11-57rem` |
| `pl-[3.87rem]` | `pl-3-87rem` |
| `pl-[15.875rem]` | `pl-15-875rem` |
| `pr-[1.82rem]` | `pr-1-82rem` |
| `pr-[22.27rem]` | `pr-22-27rem` |
| `pt-[1.17rem]` | `pt-1-17rem` |
| `pt-[1.4018rem]` | `pt-1-4018rem` |
| `pt-[1.6875rem]` | `pt-1-6875rem` |
| `pt-[2rem]` | `pt-2rem` |
| `pt-[6.8125rem]` | `pt-6-8125rem` |
| `pt-[10rem]` | `pt-10rem` |
| `pt-[12rem]` | `pt-12rem` |
| `pb-[0.82rem]` | `pb-0-82rem` |
| `pb-[0.875rem]` | `pb-0-875rem` |
| `pb-[1.62rem]` | `pb-1-62rem` |
| `pb-[1.625rem]` | `pb-1-625rem` |
| `pb-[1.9375rem]` | `pb-1-9375rem` |
| `pb-[7.5rem]` | `pb-7-5rem` |
| `pb-[7.8125rem]` | `pb-7-8125rem` |
| `pb-[9rem]` | `pb-9rem` |
| `pb-[12rem]` | `pb-12rem` |
| `px-[8.4375rem]` | `px-8-4375rem` |
| `px-[1.25rem]` | `px-1-25rem` |
| `px-[1.3rem]` | `px-1-3rem` |
| `py-[0.625rem]` | `py-0-625rem` |
| `mb-[0.75rem]` | `mb-0-75rem` |
| `mb-[1.25rem]` | `mb-1-25rem` |
| `mb-[1.5rem]` | `mb-1-5rem` |
| `mb-[2.25rem]` | `mb-2-25rem` |
| `mb-[2.49rem]` | `mb-2-49rem` |
| `mb-[2.87rem]` | `mb-2-87rem` |
| `mb-[3rem]` | `mb-3rem` |
| `mb-[3.75rem]` | `mb-3-75rem` |
| `mb-[3.875rem]` | `mb-3-875rem` |
| `mb-[4.25rem]` | `mb-4-25rem` |
| `mb-[4.19rem]` | `mb-4-19rem` |
| `mb-[5rem]` | `mb-5rem` |
| `mb-[10.69rem]` | `mb-10-69rem` |
| `gap-[0.5rem]` | `gap-0-5rem` |
| `gap-[1.25rem]` | `gap-1-25rem` |
| `gap-[1.75rem]` | `gap-1-75rem` |
| `gap-[3.125rem]` | `gap-3-125rem` |
| `gap-[15.20rem]` | `gap-15-20rem` |
| `py-[0.62rem]` | `py-0-62rem` |
| `px-[0.75rem]` | `px-0-75rem` |
| `mt-[5.375rem]` | `mt-5-375rem` |
| `mb-[1.11rem]` | `mb-1-11rem` |
| `mb-[0.99rem]` | `mb-0-99rem` |
| `mb-[1.0625rem]` | `mb-1-0625rem` |
| `mb-[2.2rem]` | `mb-2-2rem` |
| `flex-[1]` | `flex-1` |

## Responsive Classes

| Old Class Name | New Class Name |
|----------------|----------------|
| `mobile:w-[19.875rem]` | `mobile-w-19-875rem` |
| `mobile:text-[5rem]` | `mobile-text-5rem` |
| `mobile:ml-[0]` | `mobile-ml-0` |
| `mobile:mt-[5.19rem]` | `mobile-mt-5-19rem` |
| `mobile:mb-[2.87rem]` | `mobile-mb-2-87rem` |
| `mobile:max-w-[23.125rem]` | `mobile-max-w-23-125rem` |
| `mobile:text-[2.25rem]` | `mobile-text-2-25rem` |
| `mobile:text-[3rem]` | `mobile-text-3rem` |
| `mobile:text-[1rem]` | `mobile-text-1rem` |
| `mobile:text-[0.8rem]` | `mobile-text-0-8rem` |
| `mobile:text-[0.875rem]` | `mobile-text-0-875rem` |
| `mobile:mb-[3.125rem]` | `mobile-mb-3-125rem` |
| `mobile:gap-[1.875rem]` | `mobile-gap-1-875rem` |
| `mobile:w-[19.6875rem]` | `mobile-w-19-6875rem` |
| `mobile:mb-[9rem]` | `mobile-mb-9rem` |
| `mobile:pl-[1.3rem]` | `mobile-pl-1-3rem` |
| `mobile:pl-[1rem]` | `mobile-pl-1rem` |
| `mobile:pt-[4.1875rem]` | `mobile-pt-4-1875rem` |
| `mobile:pb-[9rem]` | `mobile-pb-9rem` |
| `mobile:mb-[2rem]` | `mobile-mb-2rem` |
| `mobile:mb-[2.25rem]` | `mobile-mb-2-25rem` |
| `mobile:mb-[4.19rem]` | `mobile-mb-4-19rem` |
| `mobile:gap-[3.75rem]` | `mobile-gap-3-75rem` |
| `mobile:px-[1.3rem]` | `mobile-px-1-3rem` |
| `mobile:gap-[2.125em]` | `mobile-gap-2-125em` |
| `mobile:-mt-[1.625em]` | `neg-mobile-mt-1-625em` |
| `mobile:mb-[0rem]` | `mobile-mb-0rem` |
| `mobile:pt-[0rem]` | `mobile-pt-0rem` |
| `mobile:h-[55vh]` | `mobile-h-55vh` |
| `mobile:w-[10rem]` | `mobile-w-10rem` |
| `mobile:h-[12.3025rem]` | `mobile-h-12-3025rem` |
| `mobile:w-[13.375rem]` | `mobile-w-13-375rem` |
| `mobile:h-[16.625rem]` | `mobile-h-16-625rem` |
| `mobile:gap-[0.903125rem]` | `mobile-gap-0-903125rem` |
| `xl:h-[600px]` | `xl-h-600px` |

## Summary

Total classes renamed: 143
