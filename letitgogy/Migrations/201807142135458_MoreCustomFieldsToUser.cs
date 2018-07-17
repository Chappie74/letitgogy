namespace letitgogy.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MoreCustomFieldsToUser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Gender", c => c.String());
            AddColumn("dbo.Users", "DOB", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "DOB");
            DropColumn("dbo.Users", "Gender");
        }
    }
}
