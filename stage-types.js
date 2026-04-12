/**
 * 144-castlevania-js — ステージデータの型メモ（実行ロジックなし）
 * stages.json を読み込む実装時の補助として使う。
 * index.html からは未読み込み。必要なら <script src="stage-types.js"> は不要（コメントのみのため）。
 *
 * @fileoverview クラスではなくプレーンオブジェクト＋識別子で統一する方針（現在の index.html と同型）。
 */

/**
 * @typedef {{ x:number, y:number, w:number, h:number }} PlatRect
 */

/**
 * @typedef {{ x:number, y:number }} Vec2
 */

/**
 * @typedef {'zombie'|'bat'|'skeleton'|'ghost'|'medoje'|'ketossi'|'knight'|'heavy_mosu'|'leviathan'|'kakashi'|'bakeneko'} MobArchetype
 */

/**
 * @typedef {{
 *   archetype: MobArchetype,
 *   x: number,
 *   y: number
 * }} MobSpawn
 */

/**
 * @typedef {
 *   'giant_bat'|'grave_wight'|'tengu'|'kappa'|'yuki_onna'|'oni'|'night_lord'|'golem'
 * } BossArchetype
 */

/**
 * @typedef {{
 *   archetype: BossArchetype,
 *   displayName: string,
 *   spawnAfterMobsCleared: boolean,
 *   x: number,
 *   y: number,
 *   stats: { hp: number, w: number, h: number },
 *   phases?: number
 * }} BossSpawn
 */

/**
 * @typedef {{
 *   id: number,
 *   name: string,
 *   theme?: string,
 *   lore: string,
 *   player?: Vec2,
 *   plats: PlatRect[],
 *   mobs: MobSpawn[],
 *   boss: BossSpawn,
 *   candles: Vec2[]
 * }} StageDef
 */

/**
 * @typedef {{
 *   meta: {
 *     title: string,
 *     world: string,
 *     progression: string,
 *     fieldGuide: Record<string, string>
 *   },
 *   stages: StageDef[]
 * }} StagesFile
 */
