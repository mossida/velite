import { excerpt } from './excerpt'
import { file } from './file'
import { image } from './image'
import { isodate } from './isodate'
import { markdown } from './markdown'
import { mdx } from './mdx'
import { metadata } from './metadata'
import { raw } from './raw'
import { slug } from './slug'
import { toc } from './toc'
import { unique } from './unique'
import * as z from './zod'

import type { VFile } from 'vfile'
import type { Config } from '../types'

declare module './zod' {
  interface ZodMeta {
    file: VFile
    config: Config
  }
}

export const s = {
  ...z,
  isodate,
  unique,
  slug,
  file,
  image,
  metadata,
  excerpt,
  markdown,
  mdx,
  raw,
  toc
}

export { z } // keep z for backward compatibility

export type { Schema, ZodType, infer } from './zod'
