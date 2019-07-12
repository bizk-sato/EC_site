# frozen_string_literal: true

# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

# db:migrate後にrails-erdをフックする
Rake::Task['db:migrate'].enhance do
  if Rails.env.development?
    Rake::Task[:after_migrate].invoke
  end
end

# migrateの後のタスク
task :after_migrate do
  Rake::Task[:create_erd].invoke
end

# ER図を作成
task :create_erd do
  # attributes=foreign_keys,primary_keys,timestamp (属性は主キー、外部キー、タイムスタンプを表示)
  # sort=false (カラム名をアルファベット順にしない)
  # filename=hage-erd (ファイル名)
  # filetype=png (ファイル拡張子)
  sh 'bin/rails erd attributes=foreign_keys,primary_keys,content,timestamp sort=false filename=model-erd filetype=png'
end
